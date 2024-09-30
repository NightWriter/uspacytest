import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Checkbox, FormControlLabel } from '@mui/material'
import './RegistrationForm.scss'
import CustomTextField from './../UI/Input/CustomTextField'
import CustomButton from './../UI/Button/CustomButton'

const RegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Це поле обов'язкове"),
    lastName: Yup.string().required("Це поле обов'язкове"),
    company: Yup.string().required("Це поле обов'язкове"),
    phone: Yup.string()
      .required("Це поле обов'язкове")
      .matches(/^\d+$/, 'Номер телефону може містити лише цифри'),
    email: Yup.string().email('Невірний email').required("Це поле обов'язкове"),
    question: Yup.string(),
    agreement: Yup.bool().oneOf([true], 'Потрібно погодитися з правилами конфіденційності'),
  })

  return (
    <section className="section-form">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          company: '',
          phone: '',
          email: '',
          question: '',
          agreement: false,
        }}
        validationSchema={validationSchema}
        validateOnMount={true}
      >
        {({ isValid, dirty, errors, touched }) => (
          <Form className="form" id="registration-form">
            <div className="about-title">
              <p>Відвідати</p>
              <p>онлайн-конференцію</p>
            </div>

            <div className="input-group">
              <Field
                name="firstName"
                as={CustomTextField}
                label="Ім'я *"
                fullWidth
                error={touched.firstName && Boolean(errors.firstName)}
              />
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>

            <div className="input-group">
              <Field
                name="lastName"
                as={CustomTextField}
                label="Прізвище *"
                fullWidth
                error={touched.lastName && Boolean(errors.lastName)}
              />
              <ErrorMessage name="lastName" component="div" className="error-message" />
            </div>

            <div className="input-group">
              <Field
                name="company"
                as={CustomTextField}
                label="Компанія *"
                fullWidth
                error={touched.company && Boolean(errors.company)}
              />
              <ErrorMessage name="company" component="div" className="error-message" />
            </div>

            <div className="input-group">
              <Field
                name="phone"
                as={CustomTextField}
                label="Номер мобільного телефону *"
                fullWidth
                error={touched.phone && Boolean(errors.phone)}
              />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>

            <div className="input-group">
              <Field
                name="email"
                as={CustomTextField}
                label="Адреса електронної пошти *"
                fullWidth
                error={touched.email && Boolean(errors.email)}
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="input-group">
              <Field
                name="question"
                as={CustomTextField}
                label={
                  <>
                    Якщо бажаєте, то поставте своє запитання та вкажіть
                    <br />
                    кому саме ви б хотіли його поставити
                  </>
                }
                fullWidth
                multiline
                rows={2}
                error={touched.question && Boolean(errors.question)}
              />
            </div>

            <div className="input-group">
            <FormControlLabel
              control={
                <Field
                  name="agreement"
                  as={Checkbox}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.05)',
                    '&.Mui-checked': {
                      color: 'rgba(255, 255, 255, 0.05)',
                    },
                    '&.Mui-checked .MuiSvgIcon-root': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label={
                <span className="custom-label">
                  Реєструючись, я повністю погоджуюся з{' '}
                  <span>Політикою конфіденційності Uspacy</span>
                </span>
              }
            />
            <ErrorMessage name="agreement" component="div" className="error-message error-message-checkbox" />
            </div>

            <CustomButton
              type="submit"
              variant="submit"
              color="primary"
              disabled={!isValid || !dirty}
            >
              Зареєструватися
            </CustomButton>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default RegistrationForm
