import React, { Component } from 'react'
import { update } from './ScoresApi'
import { withRouter } from 'react-router-dom'

class UpdateExample extends Component {
    state={
      score: {
        game: '',
        time: ''
      }
    }
    componentDidMount () {
      const user = this.props.user
      const exampleId = this.props.exampleId
      show(user, exampleId)
        .then((response) => {
          const showExample = response.data.example
          this.setState({
            formData: showExample
          })
        })
        .catch((error) => console.log(error))
    }
      handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const updatedForm = Object.assign(this.state.formData)
        updatedForm[name] = value
        this.setState({
          formData: updatedForm
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        const updatedExample = this.state.formData
        const user = this.props.user
        const exampleId = this.props.match.params.id
        update(user, updatedExample, exampleId)
          .then(() => this.props.history.push(`/examples/${exampleId}`))
          .catch(err => console.log(err))
      }

      render () {
        return (
          <form onSubmit={this.handleSubmit}>
            Title
            <input onChange={this.handleChange} type="text" name="title" value={this.state.formData.title} />
            Text
            <input onChange={this.handleChange} type="text" name="text" value={this.state.formData.text} />
            <button type='submit'>Update</button>
          </form>
        )
      }
}

export default withRouter(UpdateExample)