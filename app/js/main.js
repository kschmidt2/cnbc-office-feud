Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })


var calculator = new Vue({
    el: '#feud',
    data: {
      round: 1,
      doubtrip: false,
      answer1: 'Health/Not Having Covid',
      points1: 8,
      answer2: 'Family',
      points2: 6,
      answer3: 'Friends',
      points3: 2,
      answer4: 'Job',
      points4: 2,
      answer5: '',
      points5: 0,
      answer6: '',
      points6: 0,
      answer7: '',
      answer8: '',
      makeItScore: 0,
      growScore: 0,
      roundPoints: 0,
    },
    watch: {
    },
    methods: {
      // functions go here
      showResponse: function (answer) {
        let round = this.round;
        $('#response-' + answer + ' .response-number').slideDown().hide();
        $('#response-' + answer + ' .answer').slideDown();
        if (answer === 1) {
            this.roundPoints = this.roundPoints + this.points1;
        } else if (answer == 2) {
            this.roundPoints = this.roundPoints + this.points2;
        } else if (answer == 3) {
            this.roundPoints = this.roundPoints + this.points3;
        } else if (answer == 4) {
            this.roundPoints = this.roundPoints + this.points4;
        } else if (answer == 5) {
            this.roundPoints = this.roundPoints + this.points5;
        } else if (answer == 6) {
            this.roundPoints = this.roundPoints + this.points6;
        } 

        console.log(this.roundPoints);
        


      },

      newRound: function(team){
        this.round = this.round +1;

        if (this.round == 5 || this.round == 6) {
            this.roundPoints = this.roundPoints * 2;
        }

        if (this.round == 7) {
            this.round = ''
            this.roundPoints = this.roundPoints * 3;
            $('.round').html('and the winner is...');
        } else {
            $('.answer').hide();
            $('.response-number').delay(500).fadeIn(500);
        }
        if (this.round == 4 || this.round == 5) {
            this.doubtrip = 'double'     
        } else if (this.round == 6) {
            this.doubtrip = 'triple' 
        } else {
            this.doubtrip = false
        }


        if (team == 'makeit') {
            this.makeItScore = this.makeItScore + this.roundPoints;
        } else if (team == 'grow') {
            this.growScore = this.growScore + this.roundPoints;
        }

        this.roundPoints = 0;

        let round = this.round;

        
            if (round == 2) {
                    this.answer1 = 'Watching the Parade';
                    this.points1 = 8;
                    this.answer2 = 'Watching football';
                    this.points2 = 6;
                    this.answer3 = 'Saying what we\'re thankful for';
                    this.points3 = 3;
                    this.answer4 = 'Spending time with family';
                    this.points4 = 2;
                } else if (round == 3) {
                    this.answer1 = 'Charlie Brown Christmas';
                    this.points1 = 13;
                    this.answer2 = 'Rudolph';
                    this.points2 = 9;
                    this.answer3 = 'How the Grinch Stole Christmas';
                    this.points3 = 3;
                    this.answer4 = 'Frosty the Snowman';
                    this.points4 = 2;
                } else if (round == 4) {
                    this.answer1 = 'Snow White';
                    this.points1 = 8;
                    this.answer2 = 'Snow day';
                    this.points2 = 5;
                    this.answer3 = 'Snowball';
                    this.points3 = 4;
                    this.answer4 = 'Snowman';
                    this.points4 = 4;
                } else if (round == 5) {
                    this.answer1 = 'Pine';
                    this.points1 = 11;
                    this.answer2 = 'Cinnamon';
                    this.points2 = 5;
                    this.answer3 = 'Gingerbread';
                    this.points3 = 3;
                    this.answer4 = 'Peppermint';
                    this.points4 = 3;
                    this.answer5 = 'Vanilla';
                    this.points5 = 2;
                    this.answer6 = 'Cranberry';
                    this.points6 = 2;
                } else if (round == 6) {
                    this.answer1 = 'It\'s A Wonderful Life';
                    this.points1 = 5;
                    this.answer2 = 'A Christmas Story';
                    this.points2 = 4;
                    this.answer3 = 'Elf';
                    this.points3 = 3;
                    this.answer4 = 'Home Alone';
                    this.points4 = 3;
                    this.answer5 = 'The Holiday';
                    this.points5 = 3;
                    this.answer6 = '',
                    this.points6 = 0
                } 

        
      },
      getWinner: function() {
        if (this.makeItScore > this.growScore) {
            $('#makeit-wins').slideDown(600);
        } else if (this.growScore > this.makeItScore) {
            $('#grow-wins').slideDown(600);
        } 
      },
      hideIntro: function() {
          $('.intro').fadeOut();
      }
    },
  })