let picturesArray:string[] = [
    './images/picture1.jpg',
    './images/picture2.jpg',
    './images/picture3.jpg',
    './images/picture4.jpg',
    './images/picture5.jpg',
    './images/picture6.jpg',
];


// Event Listeners

document.getElementById('switch-left').addEventListener("click", function () {
    slider.switchLeft()
});

document.getElementById('switch-right').addEventListener("click", function () {
    slider.switchRight()
});


class Slider {

    _picturesArray: string[];
    _numberOfpictures: number;
    _currentImgIndex: number = 0;
    _priviousImgIndex: number = -1;


    constructor(picturesArray) {
        this._picturesArray = picturesArray;
        this._numberOfpictures = this._picturesArray.length;
    };

    switchLeft() {
        this._priviousImgIndex=this._currentImgIndex;
        this._currentImgIndex = this._currentImgIndex - 1;
        if (this._currentImgIndex < 0) {
            this._currentImgIndex = this._picturesArray.length - 1;
        }
        this.displayPicture(this._priviousImgIndex);
    };

    switchRight() {
        this._priviousImgIndex=this._currentImgIndex;
        this._currentImgIndex = this._currentImgIndex + 1;
        if (this._currentImgIndex > this._picturesArray.length - 1) {
            this._currentImgIndex = 0;
        }
        this.displayPicture(this._priviousImgIndex);

    };

    changeEvery3Sec(){


    }

    private displayPicture(_previousIndex) {
        this._priviousImgIndex = _previousIndex;

        document.querySelector('img').src = this._picturesArray[this._currentImgIndex];

        let currButton = document.querySelectorAll('.radio-button')[this._currentImgIndex];
        let prevButton = document.querySelectorAll('.radio-button')[this._priviousImgIndex];

        prevButton.classList.remove('red-color');
        currButton.classList.add('red-color');

        // TUTAJ KOD ODSWIRZAJACY PRZEGLADARKE
 }

}

var slider = new Slider(picturesArray);

setInterval(function () {
    slider.switchRight();
}, 3000)




