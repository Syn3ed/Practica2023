export default {
  data() {
    return {
      min: ['D', 'I', 'S', 'C'],
      fileContent: '',
      maxAr: { D: 0, S: 0, I: 0, C: 0, N: 0 },
      razAr: { D: 0, S: 0, I: 0, C: 0, N: 0 },
      minAr: { D: 0, S: 0, I: 0, C: 0, N: 0 },
      max: ['D', 'I', 'S', 'C'],
      n: 0,
      m: 4,
      currentQuestion: 0,
      maxIndex : null,
      maxValue : Number.NEGATIVE_INFINITY
    };
  },
  methods: {
    toggleButton(buttonId) {
      const button = document.getElementById(buttonId);
      button.classList.toggle("selected");
      const buttons = document.getElementsByClassName("button");
      const buttons2 = document.getElementsByClassName("button2");
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== buttonId && !buttons[i].classList.contains("button2")) {
          buttons[i].disabled = button.classList.contains("selected");
        }
        if (buttons[i].id == buttonId && buttons2[i].classList.contains("button2")) {
          buttons2[i].disabled = button.classList.contains("selected");
        }
      }
    },
    toggleButton2(buttonId) {
      const button = document.getElementById(buttonId);
      button.classList.toggle("selected2");
      const buttons = document.getElementsByClassName("button");
      const buttons2 = document.getElementsByClassName("button2");
      for (var i = 0; i < buttons2.length; i++) {
        if (buttons2[i].id !== buttonId && !buttons2[i].classList.contains("button")) {
          buttons2[i].disabled = button.classList.contains("selected2");
        }
        if (buttons2[i].id == buttonId && buttons[i].classList.contains("button")) {
          buttons[i].disabled = button.classList.contains("selected2");
        }
      }
    },
    startTest() {
      const startButton = document.querySelector(".buttonStart");
      startButton.disabled = true;

      fetch("http://localhost:5000/xmlviewer.json")
        .then(response => response.json())
        .then(jsonData => {
          jsonData.root.data.slice(this.n, this.m).forEach((item, index) => {
            const columns = item.value.split(';');
            const secondColumn = columns[0];
            const maxColumn = columns[1];
            const minColumn = columns[2];
            const label = document.getElementById(`label${index + 1}`);
            if (label) {
              label.textContent = secondColumn;
              this.min[index] = minColumn;
              this.max[index] = maxColumn;
            }
          });
        })
        .catch(error => {
          console.error('Ошибка загрузки файла:', error);
        });
    }, goToNextQuestion() {
      const buttons = document.getElementsByClassName("button");
      const buttons2 = document.getElementsByClassName("button2");
      if (this.m !== 28 * 4) {


        for (var j = 0; j < buttons.length; j++) {
          if (buttons[j].classList.contains("selected")) {
            this.maxAr[this.max[j]]++;
            console.log("MAX", this.maxAr[this.max[j]], this.max[j]);
          }
        }
        for (var i = 0; i < buttons2.length; i++) {
          if (buttons2[i].classList.contains("selected2")) {
            this.minAr[this.min[i]]++;
            console.log("MIN", this.minAr[this.min[i]], this.min[i]);
          }
        }

        this.n += 4;
        this.m += 4;


        fetch("http://localhost:5000/xmlviewer.json")
          .then(response => response.json())
          .then(jsonData => {
            jsonData.root.data.slice(this.n, this.m).forEach((item, index) => {
              const columns = item.value.split(';');
              const secondColumn = columns[0];
              const maxColumn = columns[1];
              const minColumn = columns[2];
              const label = document.getElementById(`label${index + 1}`);
              if (label) {
                label.textContent = secondColumn;
                this.min[index] = minColumn;
                this.max[index] = maxColumn;
              }
            });
          })
          .catch(error => {
            console.error('Ошибка загрузки файла:', error);
          });
        if (this.m == 28 * 4) {
          this.razAr.D = this.maxAr.D - this.minAr.D;
          this.razAr.I = this.maxAr.I - this.minAr.I;
          this.razAr.S = this.maxAr.S - this.minAr.S;
          this.razAr.C = this.maxAr.C - this.minAr.C;
          console.log(this.maxAr);
          console.log(this.minAr);
          console.log(this.razAr);

          const allKeys = [...new Set([...Object.keys(this.maxAr), ...Object.keys(this.razAr), ...Object.keys(this.minAr)])];

          for (const key of allKeys) {
            const maxArValue = this.maxAr[key] || 0;
            const razArValue = this.razAr[key] || 0;
            const minArValue = this.minAr[key] || 0;

            const max = Math.max(maxArValue, razArValue, minArValue);

            if (max > this.maxValue) {
              this.maxValue = max;
              this.maxIndex = key;
            }
          }
          this.loadFile(this.maxIndex);

        }


      }
    }, async loadFile(maxIndex) {
      try {
        const response = await fetch(`http://localhost:5000/Dom_${maxIndex}.txt?${Date.now()}`);
          if (response.ok) {
          const fileContent = await response.text();
          this.fileContent = fileContent;
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error loading file:', error);
      }
    },goToNext(){
      this.$router.push('/report');
    }


  }
};
