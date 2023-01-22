import React, { Component,useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import "./Form.css";
import "./Captcha.js";

class Form extends Component {
  username = 'admin';
  password = 'admin';
  number = 0;
  constructor(props) {
    super(props);
  }
  makeid(length) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  render() {
    return (
      <div onMouseMove={(e)=>{
        // if(e.clientX)
        // alert(e.clientX);
      }}>
        <div id="modal"></div>
        <div className="container">
          <div className="card" id="rootdiv">
            <div className="card-body">
              <div className="row">
                <div className="col"></div>
                <div className="col text-center">Form Login</div>
                <div className="col"></div>
              </div>
              <form onSubmit={(e)=>{
                if($('#username').val() != this.username || $('#password').val() != this.password){
                  alert('username and password salah! counter : '+ ++this.number);
                  // console.log($('#username').val() + ' uname = '+this.username)
                }
                if(this.number === 3){
                  this.number = 0;
                  let timeLeft = 30;
                  alert('Silahkan tunggu 30 detik');
                  setInterval(function(){
                    if(timeLeft === -1){
                      $('.container').show()
                    }else{
                      $('.container').hide()
                      --timeLeft;
                    }
                  },1000)
                }
                e.preventDefault();
              }}>
                <div className="row mt-5">
                  <div className="col-3">Username</div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-3">Password</div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3 mb-3" id="reset">
                  <div className="col text-center">
                    <div className="card">
                      <div className="card-body">
                        <p id="captcha">{this.makeid(5)}</p>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validation"
                            // onKeyUp={this.captcha()}
                            onKeyUp={(e) => {
                              if (
                                document.getElementById("validation").value ==
                                document.getElementById("captcha").textContent
                              ) {
                                $("#btn").html(`<div class="col-2"></div>
                                                <div class="col-8 text-center">
                                                <button class="btn btn-primary type="submit">Submit</button>
                                                </div>
                                                <div class="col-2"></div>`);
                                $("#reset").html(``);
                              }
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" id="btn"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
