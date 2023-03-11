class QuizEvent {
    constructor(question, options, answer, difficulty) {
      this.question = question;
      this.options = options;
      this.answer = answer;
      this.difficulty = difficulty;
    }
  
    // Returns the text of the quiz question.
    getQuestion() {
      return this.question;
    }
  
    // Returns an array of strings representing the answer options for the quiz question.
    getOptions() {
      return this.options;
    }
  
    // Returns the correct answer to the quiz question.
    getAnswer() {
      return this.answer;
    }
  
    // Returns the difficulty level of the quiz question.
    getDifficulty() {
      return this.difficulty;
    }
  
    // Takes a string representing the player's answer to the quiz question and returns true if it is correct and false otherwise.
    checkAnswer(playerAnswer) {
      return playerAnswer.toLowerCase() === this.answer.toLowerCase();
    }
  
    // Takes a string representing a row in the quiz-questions.csv file and returns a new QuizEvent object with the data from that row.
    static fromCSV(csvRow) {
      const [question, option1, option2, option3, option4, answer, difficulty, weight] = csvRow.split(",");
      const options = [option1, option2, option3, option4];
      return new QuizEvent(question, options, answer, parseInt(difficulty));
    }
  }