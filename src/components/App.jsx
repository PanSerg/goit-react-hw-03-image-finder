import { Component } from "react";
import React from "react";
import getImages from "services/api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    card: [],
    inputValue: null,
    page: 1,
    isLoading: false,
    onShow: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.state.page) {
      this.setState({ isLoad: true });

      getImages(this.state.inputValue, this.state.page)
        .then(cards =>
          this.setState(prev => ({
            card: [...prev.card, ...cards],
            isLoading: false,
        })))
        .catch(error => console.log(error));
       }
  };

  render(){
    return (
      <div>
        <Searchbar onSubmit={this.FindImage} />
        <ImageGallery img={this.state.card} />
        
      </div>
    );
  };
};
