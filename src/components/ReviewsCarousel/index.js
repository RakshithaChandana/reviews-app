// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {listIndex: 0}

  onClickRightArrow = () => {
    const {listIndex} = this.state
    const {reviewsList} = this.props
    if (listIndex < reviewsList.length - 1) {
      this.setState(prevState => ({listIndex: prevState.listIndex + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {listIndex} = this.state
    if (listIndex > 0) {
      this.setState(prevState => ({listIndex: prevState.listIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {listIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[listIndex]
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Reviews</h1>
          <div className="review-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLeftArrow}
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <div className="review-details-container">
              <img src={imgUrl} alt={username} />
              <p className="name">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              className="button"
              onClick={this.onClickRightArrow}
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewCarousel
