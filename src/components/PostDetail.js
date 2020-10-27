import React from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import PostDetailHeader from "./PostDetailHeader";
import posts from './posts';
import { Link } from "react-router-dom";

class PostsDetail extends React.Component{

  state = {activePost: []}

  componentDidMount = ()=>{
  const postsArr = [];
  const posttitledetailPage = this.props.location.state.post;
  posts.map(post=>{
    if(post.postTitle.includes(posttitledetailPage)){
      postsArr.push(post)
    }
    
  })
 
  this.setState({activePost : postsArr})
 
}
  render(){
    //console.log(this.props)
    return (
      <div>
        <PostDetailHeader />
          <div id="holds-everything">
            <div id="holder">
              <div className="postdetail">
                {this.state.activePost.map(item=>{
                  return (
                    <div>
                      <div className="postholder">
                        <p className="posttitle">{item.postTitle}</p>
                        <p className="postdate">{item.postedDate}</p>
                        <p className="postIntroText">{item.postIntroText}</p>
                        <p className="thepostHeading">{item.heading1}</p>
                        <p className="postParagraph">{item.paragraph1}</p>
                        <p className="thepostHeading">{item.heading2}</p>
                        <p className="postParagraph">{item.paragraph2}</p>
                        <p className="thepostHeading">{item.heading3}</p>
                        <p className="postParagraph">{item.paragraph3}</p>
                        <p className="thepostHeading">{item.heading4}</p>
                        <p className="postParagraph">{item.paragraph4}</p>
                        <p className="thepostHeading">{item.heading5}</p>
                        <p className="postParagraph">{item.paragraph5}</p>
                      </div>
                      <div className="goback">
                        <img className="gobackbutton" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg" />
                        <p className="readmore goback">
                          <Link to = "/the_atoz_of_mgmt_pub_web/theposts">go back</Link></p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
};

export default PostsDetail;