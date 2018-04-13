import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { HelperService } from '../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode: string = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': true,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
    });
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  displaySubmitBtn: Boolean= false;
  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }
    this.displaySubmitBtn = this.isAllAnswered();
    //console.log(JSON.stringify(question));
    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question, option: Option) {
    return question.options.forEach((x) => { (x.selected = true)? 'true':'false' });
  };
  
  isAllAnswered(): Boolean{
    let questionsAnswered = [];
    this.quiz.questions.forEach(question => {
      question.options.forEach(option => {
        if(option.selected === true) {
          questionsAnswered.push(question);
        }
      });
    });

    //console.log(questionsAnswered.length +"==="+ this.quiz.questions.length);
    if(questionsAnswered.length === this.quiz.questions.length) {
      return true;
    }
   
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };
  totalScore: number = 0;
  onSubmit() {
    let answers = [];
    //this.quiz.questions.forEach(x => answers.push({ 'QuizId': this.quiz.id, 'QuestionId': x.id, 'Answered': x.answered }));
    this.totalScore = 0;
    this.quiz.questions.forEach(question => {
      question.options.forEach(option => {
        if(option.selected && option.isAnswer) {
          option.isCorrectAnswered = true;
          console.log(this.totalScore = this.totalScore + 1);
        }
      });
    });

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    this.mode = 'result';
  }
}
