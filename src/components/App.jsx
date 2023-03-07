import { Component } from "react";
import React from "react";
import getImages from "services/api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Btn } from "./Button/Button";

export class App extends Component {
  state = {
    card: [],
    inputValue: null,
    page: 1,
    isLoading: false,
    onShow: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.state.page) {
      this.setState({ isLoading: true });

      getImages(this.state.inputValue, this.state.page)
        .then(cards =>
          this.setState(prev => ({
            card: [...prev.card, ...cards],
            isLoading: false,
        })))
        .catch(error => console.log(error));
    }
  };


  FindImage = e => {
    if (e.search === '') {
      alert('Enter text')
    } else {
      this.setState({ card: [] });
      this.setState({ page: 1 });
      this.setState({ isLoading: true });
      this.setState({ inputValue: e.search });

      getImages(e.search, 1)
        .then(cards => this.setSate({ card: [...cards], isLoading: false }))
        .catch(error => console.log(error));
    }
  }

  addPages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };

  render(){
    return (
      <div>
        <Searchbar onSubmit={this.FindImage} />
        <ImageGallery img={this.state.card} />
        {this.state.card.length >= 12
          && this.state.isLoading === false && <Btn addPages={this.addPages} />}
      </div>
    );
  };
};
