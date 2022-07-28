class Rotation {
    constructor(container){
        this.container = container;
        this.rotator = Array.from(document.querySelectorAll('.rotator__case'));//выборка элементов span
        this.ActivRotatorElement = 0;//индекс массива
        this.speed = 0;//скорость
        this.change();
    }
//задаем цвет и скорость для элемента
    changeString() {
        this.speed =+this.rotator[this.ActivRotatorElement].dataset.speed
        this.rotator[this.ActivRotatorElement].style.color = this.rotator[this.ActivRotatorElement].dataset.color
    }

    change() {
        let intervalId = null;
        //очищаем элементы от класса rotator__case_active
        this.rotator.forEach(element => {
            element.classList.remove('rotator__case_active');

        });

        this.changeString();//красим и задаем скорость
        this.rotator[this.ActivRotatorElement].classList.add('rotator__case_active');//выводим на экран
           
        intervalId = setInterval(() => {
            this.change()
        }, this.speed);

        this.ActivRotatorElement = ((this.ActivRotatorElement + 1) % this.rotator.length);//меняем индекс элемента
    }
}

new Rotation(document.querySelector('rotator'))