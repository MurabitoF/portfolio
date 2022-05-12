import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import ButtonSolid from '../../components/Button'
import Input from '../../components/Form/Input'
import TextArea from '../../components/Form/TextArea'
import './index.scss'

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .min(10, 'Too short!')
    .max(200, 'Too long!')
    .required('Required')
})

const ContactMe = () => {
  const [sended, setSended] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        values,
        process.env.REACT_APP_EMAIL_PLUBIC_KEY)
        .then(() => {
          setSended(true)
        })
        .catch((err) => {
          console.log(err)
          alert('An error has occurred while sending the email')
        })
    }
  })

  return (
    <section className='contact-me'>
      <div className='contact-section'>
        <h1 className='text-lg text-hover-effect'>Contact Me</h1>
        <p className='contact-text'>You can contact me on my social networks, send me an email or contact me using the form on this page.</p>
        <div className='contact-icons'>
          <a href='mailto: francomurabito@outlook.com' ><MdEmail className='svg-hover-effect' size={'5em'} color='#EFEFEF' /></a>
          <a href='https://www.linkedin.com/in/franco-murabito/'><FaLinkedin className='svg-hover-effect' size={'5em'} color='#EFEFEF' /></a>
          <a href='https://github.com/MurabitoF'><FaGithub className='svg-hover-effect' size={'5em'} color='#EFEFEF' /></a>
        </div>
      </div>
      <div className='contact-section'>
        {sended
          ? (
          <h1 className='text-lg text-hover-effect'>Thank you, I will contact you as soon as possible.</h1>
            )
          : (
        <form onSubmit={formik.handleSubmit}>
          <Input
            errors={formik.errors.name}
            touched={formik.touched.name}
            value={formik.values.name}
            handleChange={formik.handleChange}
            name='name'
            type='text'
            label='Name'
          />

          <Input
            errors={formik.errors.email}
            touched={formik.touched.email}
            value={formik.values.email}
            handleChange={formik.handleChange}
            name='email'
            type='email'
            label='Email'
          />

          <TextArea
            errors={formik.errors.message}
            touched={formik.touched.message}
            value={formik.values.message}
            handleChange={formik.handleChange}
            name='message'
            label='Message'
          />

          <ButtonSolid className="submit-btn" type="submit">Send</ButtonSolid>
        </form>
            )}
      </div>
    </section>
  )
}

export default ContactMe
