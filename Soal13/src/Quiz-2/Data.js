import React from 'react'

const data = [
    {name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"},
    {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"},
    {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"},
    {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
]

class Nama extends React.Component {
    render() {
        return (
            <>
                {this.props.name}
            </>
        );
    }
}

class Age extends React.Component {
    render() {
        return (
            <>
                {this.props.name}
            </>
        );
    }
}

class Gender extends React.Component {
    render() {
        if (this.props.name == 'Male'){
            return (
                <>
                    Mr.
                </>
            );
        } else {
            return (
                <>
                    Mrs.
                </>
            );
        }
        
    }
}

class Profession extends React.Component {
    render() {
        return (
            <>
                {this.props.name}
            </>
        );
    }
}

class Photo extends React.Component {
    render() {
        return (
            <>
                <img src={this.props.name} width={200} height={100} style={{overflow: 'hidden', zIndex: '-100'}}></img>
            </>
        );
    }
}

function Data() {
    return (
        <>
            <div style={{margin: '10px auto', border: '1px solid #aaa', borderRadius: '10px', width: '40%', padding: '20px', backgroundColor: '#FFF'}}>
                <div>
                    {data.map(el=> {
                        return (
                            <div style={{border: '1px solid', borderRadius: '10px', margin: '10px', width: '38%', display: 'inline-block'}}>
                                <Photo name={el.photo} />
                                <b><p><Gender name={el.gender} /><Nama name={el.name} /></p></b>
                                <p><Profession name={el.profession} /></p>
                                <p><Age name={el.age} /> years old</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Data