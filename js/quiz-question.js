class QuizQuestions {
    constructor(events) {
      this.events = events;
    }
  
    // Returns an array of QuizEvent objects.
    getEvents() {
      return this.events;
    }
  
    // Returns a random QuizEvent object with difficulty level equal to or lower than the specified value.
    getRandomEvent(difficulty) {
      const filteredEvents = this.events.filter((event) => event.getDifficulty() <= difficulty);
      const randomIndex = Math.floor(Math.random() * filteredEvents.length);
      return filteredEvents[randomIndex];
    }
  
    // Loads quiz events from a CSV string and creates a new QuizQuestions object.
    static fromCSV(csvString) {
      const rows = csvString.trim().split("\n");
      const events = rows.slice(1).map((row) => {
        const [question, option1, option2, option3, option4, answer, difficulty, weight] = row.split(",");
        const options = [option1, option2, option3, option4];
        return new QuizEvent(question, options, answer, parseInt(difficulty));
      });
      return new QuizQuestions(events);
    }
  }