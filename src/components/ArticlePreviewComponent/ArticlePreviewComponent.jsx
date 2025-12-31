import "./ArticlePreviewComponent.scss"
import previewImage from "../../assets/images/drawers.jpg";
import avatarMichelle from "../../assets/images/avatar-michelle.jpg";
import iconShare from "../../assets/images/icon-share.svg";
import { useState } from 'react';

function ArticlePreviewComponent() {
  
  //const [showTooltip, setShowTooltip] = useState(false);
  //const [showOverlay, setShowOverlay] = useState(false);

  const handleShareClick = () => {
    console.log("Share button clicked");
    // setShowTooltip(!showTooltip);
    //setShowOverlay(!showOverlay);
  };

  return (
    <div className="article-preview-component">
      <img src={previewImage} alt="Drawers" className="preview-image" />
      <div className="content">
        <h1 className="text-preset-1 title">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <h2 className="text-preset-2 description">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</h2>
        <div className="author-wrapper">
          <img src={avatarMichelle} alt="Michelle" className="author-avatar" />
          <div className="author-details">
            <p className="author-name text-preset-2">Michelle Appleton</p>
            <p className="publish-date text-preset-2">28 Jun 2020</p>
          </div>
          <div className="share-button-wrapper">
            <div className="share-button" aria-label="Share Article" onClick={handleShareClick}>
              <img src={iconShare} alt="Share Icon" />
              {/*<div className={`share-tooltip text-preset-3 ${showTooltip ? 'show' : ''}`}>Share tablet/desktop</div>*/}
            </div>
          </div>
          {/*<div className={`share-overlay text-preset-3 ${showOverlay ? 'show' : ''}`}>Share mobile</div>*/}
        </div>
      </div>
    </div>
  )
}

export default ArticlePreviewComponent