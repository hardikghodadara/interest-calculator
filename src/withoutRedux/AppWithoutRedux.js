import React, {Component} from 'react';
import '../App.css';

const SliderInput = (props) => (
    <input type="range"
           min={props.min}
           max={props.max}
           value={props.value}
           onChange={props.onChangeSlider}
           className="slider"
    />
);

class AppWithoutRedux extends Component {

    state = {
        loanAmount: 1000,
        loanDuration: 6,
        interestRate: 0,
        monthlyPayment: 0,
        numPayments: 0,
        isLoading: true
    };

    componentDidMount() {
        this.updateInterestData();
    }

    updateInterestData = () => {
        this.setState({isLoading: true});
        fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.loanAmount}&numMonths=${this.state.loanDuration}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    interestRate: data.interestRate,
                    numPayments: data.numPayments,
                    monthlyPayment: data.monthlyPayment.amount,
                    isLoading: false
                })
            });
    };

    onChangeSlider = (type, e) => {
        this.setState({[type]: e.target.value}, () => this.updateInterestData());
    };

    render() {
        return (
            <div className="container text-dark">
                <h1 className="text-center text-normal">Interest Calculator</h1>
                <div className="d-flex justify-content-between ">
                    <div className="card">
                        <div className="font-large font-bold text-normal">Interest <br/> Rate:</div>
                        <div className="font-large text-bottom-right">{this.state.isLoading ?
                            <div className="text-light">Calculating...</div> :
                            <div><span className="font-x-large font-bold">{this.state.interestRate}</span> %</div>}
                        </div>
                    </div>

                    <div className="card">
                        <div className="font-large font-bold text-normal">Number of <br/> Installments:</div>
                        <div className="font-large text-bottom-right">{this.state.isLoading ?
                            <div className="text-light">Calculating...</div> :
                            <div><span className="font-x-large font-bold">{this.state.numPayments}</span> EMIs</div>}
                        </div>
                    </div>
                    <div className="card">
                        <div className="font-large font-bold text-normal">Monthly <br/> Payment:</div>
                        <div className="font-large text-bottom-right">{this.state.isLoading ?
                            <div className="text-light">Calculating...</div> :
                            <div><span className="font-x-large font-bold">{this.state.monthlyPayment}</span> $</div>}
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="card flex-column">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="margin text-normal">Loan Amount:</div>
                            <div className="font-large"><span className="font-large">{this.state.loanAmount}</span>$</div>
                        </div>
                        <div>
                            <SliderInput
                                value={this.state.loanAmount}
                                min={500}
                                max={5000}
                                onChangeSlider={e => this.onChangeSlider('loanAmount', e)}
                            />
                            <div className="d-flex align-items-center justify-content-between margin-top">
                                <div>500$</div>
                                <div>5000$</div>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-column">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="margin text-normal">Loan Duration:</div>
                            <div className="font-large"><span className="font-large">{this.state.loanDuration}</span> Months</div>
                        </div>
                        <SliderInput
                            value={this.state.loanDuration}
                            min={6}
                            max={24}
                            onChangeSlider={e => this.onChangeSlider('loanDuration', e)}
                        />
                        <div className="d-flex align-items-center justify-content-between margin-top">
                            <div>6 Months</div>
                            <div>24 Months</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppWithoutRedux;
