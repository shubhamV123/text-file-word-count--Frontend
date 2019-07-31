import React from 'react';
import { } from 'antd';
import { Layout, Input, Button } from 'antd';


import './App.css';
import DataTable from './DataTable';

const { Search } = Input;
const { Content, } = Layout;

class App extends React.Component {

  state = {
    loading: false,
    iconLoading: false,
    inputValue: "",
    data: [],
    isTableActive: false
  };
  fetchData = () => {
    this.setState({ loading: true, isTableActive: true });

    fetch(`https://whispering-earth-69130.herokuapp.com/${this.state.inputValue}`
    ).then(data => data.json())
      .then(data => {
        this.setState({ loading: false, data: data.data, });

      })
      .catch(err => {
        alert("Something went wrong");
      })


  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }
  render() {
    let { loading, inputValue, data, isTableActive } = this.state;
    return (
      <Layout >

        <Content className="layout-content">


          <div className="flex-center">
            <Search
              value={inputValue}
              placeholder="Enter number to search top words"
              onChange={this.handleChange}
              onSearch={value => console.log(value)}
              className="max-width-300 mr-16 mb-16"

            />
            <Button type="primary" onClick={this.fetchData} loading={loading}>
              Loading
              </Button>
          </div>

          <DataTable active={isTableActive} loading={loading} data={data} />
        </Content>
      </Layout>


    );
  }
}

export default App;
