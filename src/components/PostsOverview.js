import React from "react";
import MainHeader from "./MainHeader";
import posts from "./posts"
import Footer from "./Footer";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import ResponsiveIcon from './ResponsiveIcon';

class PostsOverview extends React.Component{
  state = {
    postsInput: '',
    postsArray: []
  }


handlePostsSearch = (e)=>{
  this.setState({postsInput: e.target.value})
}

postsSearch = (e)=>{
  const postsArr = [];
  const postsSearchInput = this.state.postsInput;
  posts.map(post=>{
    if(post.postTitle.includes(postsSearchInput)){
      postsArr.push(post)
    }
    
  })
  console.log(postsArr)
  this.setState({postsArray : postsArr, postsInput: ''})
  //console.log(this.state.postsArray)
}

handleFilter = (e)=>{
      const postsArr = [];
      posts.map(item=>{
        Object.getOwnPropertyNames(item.postTags).map(
          (val, idx, array)=>{
            if(e.target.textContent === val && item.postTags[val] === true){
              
              postsArr.push(item)
              console.log('postarr' + postsArr.length)
            }
        })
      })

      this.setState({postsArray : postsArr})
    }

  render(){
    console.log('blah ' +this.props.state)
    const postsMain = posts.map(post=>{
              return (
                <div className="postcard">
                  <h4 className="h4-post-overview">{post.postTitle}</h4>
                  <p className="post-date">{post.postedDate}</p>
                  <p className="post-word">{post.postIntroText.substring(0,30)+'...'}</p>
                  <div className="readmoreholder">
                    <p className="readmore">
                      <Link to={{ pathname: `/thepostsdetailed/${post.postTitle}`,
                        state: {post: post.postTitle}
                        }}>read more</Link>
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg" />
                  </div>
                </div>
              )
            })
          
    //this will display posts related to the search      
    const postsSearchResults =this.state.postsArray.map(post=>{
                return (
                  <div className="postcard">
                  <h4 className="h4-post-overview">{post.postTitle}</h4>
                  <p className="post-date">{post.postedDate}</p>
                  <p className="post-word">{post.postIntroText.substring(0,60)+'...'}</p>
                  <div className="readmoreholder">
                    <p className="readmore">
                    <Link to={{ pathname: `/thepostsdetailed/${post.postTitle}`,
                        state: {post: post.postTitle}
                        }}>read more</Link>
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg" />
                  </div>
                </div>
                );
                
              })
      

      const showPosts = ()=>{
        if(!this.state.postsArray.length > 0){
          return postsMain;
        }else {
          return postsSearchResults;
        }
    }
    
    return (
      <div>
        <header>
          <div id="items_inside_header_holder">
            <h1 className="theh1"><Link to="/">The A-Z of Managing a Publishing Website</Link></h1>
            <div id="input_and_button_holder" >
              <input type="text" value = {this.state.postsInput} name="postsinput_field" onChange = {this.handlePostsSearch} />
              <button id="search" onClick = {this.postsSearch}>search</button>
            </div>
          
          <ResponsiveIcon />
          <div id="tags_filter_holder" onClick={this.handleFilter} >
            <button>skills</button>
            <button>tools</button>
            <button>understanding</button>
            <button>responsibility</button>
            <button>tasks</button>
          </div>
          </div>
        </header>
        <div id="holds-everything">
          <div id="holder">
            {showPosts()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default PostsOverview;
