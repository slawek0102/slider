let picturesArray:string[] = [
    './src_files/picture1.jpg',
    './src_files/picture2.jpg',
    './src_files/picture3.jpg',
    './src_files/picture4.jpg',
    './src_files/picture5.jpg',
    './src_files/picture6.jpg',
];


// Event Listeners

document.getElementById('switch-left').addEventListener("click", function () {
    slider.switchLeft()
});

document.getElementById('switch-right').addEventListener("click", function () {
    slider.switchRight()
});




class Slider {

    _picturesArray:string[];
    _numberOfpictures:number;
    _currentImgIndex:number = 0;

    constructor(picturesArray) {
        this._picturesArray = picturesArray;
        this._numberOfpictures = this._picturesArray.length;
    };


    switchLeft() {
        this._currentImgIndex = this._currentImgIndex - 1;
        if (this._currentImgIndex < 0) {
            this._currentImgIndex = this._picturesArray.length - 1;
        }
        this.displayPicture();
    };

    switchRight() {
        this._currentImgIndex = this._currentImgIndex + 1;
        if (this._currentImgIndex > this._picturesArray.length - 1) {
            this._currentImgIndex = 0;
        }
        this.displayPicture();
    };

    private displayPicture(){
       document.getElementById('img').src = this._picturesArray[this._currentImgIndex];
    }

}


var slider = new Slider(picturesArray);


