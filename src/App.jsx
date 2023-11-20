import Hero from './components/Hero'
import Demo from './components/Demo'

import './App.css'
// import { useEffect } from 'react';

// const url = 'https://article-data-extraction-and-summarization.p.rapidapi.com/article?summarize=true&summarize_language=auto&url=https://www.nytimes.com/2023/11/20/technology/openai-altman-ceo-not-returning.html'

// // 'https://article-data-extraction-and-summarization.p.rapidapi.com/article?url=https%3A%2F%2Fwww.nytimes.com%2F2023%2F11%2F20%2Ftechnology%2Fopenai-altman-ceo-not-returning.html&summarize=true&summarize_language=auto';

// // https://article-data-extraction-and-summarization.p.rapidapi.com/article?summarize=true&summarize_language=auto&url=https://www.nytimes.com/2023/11/20/technology/openai-altman-ceo-not-returning.html

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd3fd051d88msh8fc4e87d77963a5p1b55f6jsn2aee30e76115',
// 		'X-RapidAPI-Host': 'article-data-extraction-and-summarization.p.rapidapi.com'
// 	}
// };



const App = () => {

  // useEffect(()=> {

  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result.article.summary);
  //     } catch (error) {
  //       console.error(error);
  //     }

  //   }

  //   fetchData()

  // })
  

  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App