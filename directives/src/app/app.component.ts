import { Component } from '@angular/core';

interface IAppComponent {
  getCurrentImage(): void;
  setCurrentImage(index: number): void;
  nextImage(): void;
  previousImage(): void;
  isActive(index: number): boolean;
  isDisabled(index: number): boolean;
}

interface Img {
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IAppComponent {
  currentImage = 0;
  images = [
    {
      title: "Sweet Cat",
      url: "https://source.unsplash.com/1600x900/?cat"
    },{
      title: "Cute Dog",
      url: "https://source.unsplash.com/1600x900/?dog"
    },
    {
      title: "Beautiful Bird",
      url: "https://source.unsplash.com/1600x900/?bird"
    },
    {
      title: "Lovely Rabbit",
      url: "https://source.unsplash.com/1600x900/?rabbit"
    },
    {
      title: "Cute Hamster",
      url: "https://source.unsplash.com/1600x900/?hamster"
    },
    {
      title: "Beautiful Fish",
      url: "https://source.unsplash.com/1600x900/?fish"
    },
    {
      title: "Lovely Turtle",
      url: "https://source.unsplash.com/1600x900/?turtle"
    },
    {
      title: "Cute Snake",
      url: "https://source.unsplash.com/1600x900/?snake"
    },
    {
      title: "Beautiful Frog",
      url: "https://source.unsplash.com/1600x900/?frog"
    },
    {
      title: "Lovely Spider",
      url: "https://source.unsplash.com/1600x900/?spider"
    }
  ]
  targetImage: Img = this.images[0];

  getCurrentImage() {
    this.targetImage =  this.images[this.currentImage];
  }

  setCurrentImage(index: number) {
    this.currentImage = index;
    this.getCurrentImage();
  }

  nextImage() {
    this.currentImage++;
    if (this.currentImage >= this.images.length) this.currentImage = 0;
    this.getCurrentImage();
  }

  previousImage() {
    this.currentImage--;
    this.getCurrentImage();
  }

  isActive(index: number) {
    return this.currentImage === index;
  }

  isDisabled() {
    return this.currentImage === 0;
  }
}
