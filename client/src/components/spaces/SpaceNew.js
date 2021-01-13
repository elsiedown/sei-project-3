import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'
import { createSpace } from '../lib/api'
import SpaceForm from './SpaceForm'
import { getLongLatData } from '../lib/api'


async function getLongLat(postcode) {
  const { data } = await getLongLatData(postcode)
  return {
    longitude: data.result.longitude,
    latitude: data.result.latitude
  }
}

function SpaceNew() {
  const history = useHistory()
  const { formdata, errors, handleChange, setErrors } = useForm({
    name: '',
    description: '',
    image: '',
    location: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(errors)
    try {
      const longLat = await getLongLat(formdata.location) // * making the call for our lng lat from the postcode, awaiting it
      const newSpace = { ...formdata, location: longLat } // * when the response comes, making an object with the formdata location updated to the lng lat object
      console.log(newSpace) // * This object should hoperfully look right now
      const { data } = await createSpace(newSpace) // * and we pass that to the create
      history.push(`/spaces/${data._id}`)
    } catch (err) {
      setErrors(err.response.data.errors)
      console.log(err.response.data.errors)
    }
  }

  return (
    <section className="form-container">
      <div className="form-box">
        <SpaceForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formdata={formdata}
          errors={errors}
          buttonText="Add a new Space!"
        />
        <div>
          {!errors ?
            <div className="ui error message small">
              <div className="header">Sorry, some information is incorrect.</div>
            </div>
            :
            <p></p>
          }
        </div>
      </div>
    </section>
  )
}

export default SpaceNew