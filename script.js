function Card({ children }) {
    return (
      <div style={{ border: '2px solid green',
       padding: '30px', 
       borderRadius: '5px', 
       margin: '20px',
       width:'60%',
       margin:'90px auto',
       height:'80%',
       backgroundColor:'white',
       boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
        {children}
      </div>
    );
  }

function Heading() {
    return (
        <h1 style={{
            textAlign: 'center',
            color:'green'
        }}>Web Development</h1>
    );
}

function FirstDiv(){
    return(
    <div>
        <p style={{
            fontSize:'22px',
            lineHeight: '1.5'
        }}>React is a popular JavaScript library for building user interfaces. It allows us to create reusable components that can render data and handle events.However, sometimes you may want to write some basic react code without installing any libraries or using create-react-app, which is a tool that sets up a modern web app by running one command.</p>
    </div>
    );
}
function SecondDiv(){
    return(
     <div>
        <p style={{
            fontSize:'22px',
            lineHeight: '1.5'
        }}>CDN stands for Content Delivery Network, which is a system of servers that deliver web content to users based on their geographic location. <a href="https://cdnjs.com/">Checkout various Libraries at cdnjs</a> CDN script files are files that are hosted on a CDN server and can be accessed by adding a script tag to  HTML file. By using CDN script files, we can use React without downloading or installing anything on your local machine.</p>
        
     </div>
    );
}
function ThirdDiv(){
    return(
    <div>
        <p style={{
            fontSize:'22px',
            lineHeight: '1.5'
        }}>To use React with CDN, you need to add two script tags to your HTML file: one for React and one for ReactDOM. React is the core library that provides the functionality for creating components and elements. ReactDOM is the library that provides the functionality for rendering React elements to the DOM. </p>
    </div>
    );
}

ReactDOM.render(
    <Card>
      <Heading />
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
    </Card>,
    document.getElementById("root")
  );