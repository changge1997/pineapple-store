import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

const EmailVerifyScreen = () => {
  const [validUrl, setValidUrl] = useState(true)
  const params = useParams()

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `/api/users/${params.id}/verify/${params.token}`
        const { data } = await axios.get(url)
        console.log(data)
        setValidUrl(true)
      } catch (error) {
        console.log(error)
        setValidUrl(false)
      }
    }
    verifyEmailUrl()
  }, [params])

  return (
    <>
      {validUrl ? (
        <>
          <Row className='py-3'>
            <h1>Congratulations!</h1>

            <Col>
              Your account has been activated. <Link to='/login'>Login</Link>
            </Col>
          </Row>
        </>
      ) : (
        <h1>Whoops...Something wrong with the link</h1>
      )}
    </>
  )
}

export default EmailVerifyScreen
