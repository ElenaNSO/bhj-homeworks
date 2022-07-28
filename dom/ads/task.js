class Rotation {
    constructor(container){
        this.container = container;
        this.rotator = Array.from(document.querySelectorAll('.rotator__case'));//выборка элементов span
        this.activRotatorElement = 0;//индекс массива
        this.speed = 0;//скорость
        this.change();
    }
//задаем цвет и скорость для элемента
    changeString() {
        this.speed =+this.rotator[this.activRotatorElement].dataset.speed
        this.rotator[this.activRotatorElement].style.color = this.rotator[this.activRotatorElement].dataset.color
    }

    change() {
        //очищаем элементы от класса rotator__case_active
        this.rotator.forEach(element => {
            element.classList.remove('rotator__case_active');

        });

        this.changeString();//красим и задаем скорость
        this.rotator[this.activRotatorElement].classList.add('rotator__case_active');//выводим на экран
           
        setTimeout(() => {
            this.change()
        }, this.speed);

        this.activRotatorElement = ((this.activRotatorElement + 1) % this.rotator.length);//меняем индекс элемента
    }
}

new Rotation(document.querySelector('rotator'))