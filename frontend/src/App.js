import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from './components/ImageCard';
import Welcome from "./components/Welcome";
import { Container, Row , Col } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");
  const [images,setImages] = useState([]);
  const [generatedDescription, setGeneratedDescription] = useState([]);
 
  

  const generateDesc = (word) =>{
    
      fetch("https://api-inference.huggingface.co/models/gpt2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
        },
        body: JSON.stringify({
          inputs: `Generate description for the given word: "${word}".`,
          options: {
            temperature: 0.7,
            max_tokens: 200,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const generatedText = data[0].generated_text.replace(`Generate description for ${word}.`, "").trim();
          setGeneratedDescription((prevDescriptions) => [...prevDescriptions, generatedText]);
        })
        .catch((err) => {
          console.log(err);
        });

    }
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    
    fetch(`https://api.unsplash.com//photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
     .then((res) => res.json())
     .then((data) =>{
        setImages([{...data, title:word}, ...images]);
        generateDesc(word);
        
     })
     .catch((err) => {
        console.log(err);
     })

     setWord('');
  };
 
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id)
    );

  };
  
  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
          {images.map((image,i)=>(
            <Col key={i} className="pb-3">
              <ImageCard  image={image} handleDelete={handleDeleteImage} description={generatedDescription[i]}/>
            </Col>
          ))}
        </Row>
        ) : (
          <Welcome/>
        )}
        
      </Container>
    </div>
  );
}


export default App;
