import React from "react";
import './Orders.css';
import { Loader } from "../../components";
import axios from "axios";

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: true,
        }
    }
    componentDidMount = () => {
        axios
            .get('https://beetroot-burger-app.herokuapp.com/orders')
            .then(res => {
                console.log(res.data);
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        orders: res.data,
                        loading: false,
                    }
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        console.log(this.state.orders)
        return (
            <>
                <h2>Orders history</h2>
                {this.state.loading && <Loader />}
                {this.state.orders.map((order) => {
                    return (
                        <div className="orders-history">
                            <p key={order + 1} className="order__name">Name:<span> {order.orderName}</span></p>
                            <p key={order + 2} className="order__address">Address:<span> {order.orderAddress}</span></p>
                            <p key={order + 3} className="order__phone">Phone:<span> {order.orderPhone}</span></p>
                            <p key={order + 7} className="order__delivery">Fast delivery: <span> {order.orderFast.toString()}</span></p>
                            <p key={order + 4} className="order__price">Price of burger:<span> {order.orderPrice} ₴</span></p>
                            <p key={order + 5} className="order__products"><span> Ingredients of burger: {JSON.stringify(order.orderProducts)}</span></p>


                        </div>
                    )
                })}
            </>
        )
    }
}
export default Orders;