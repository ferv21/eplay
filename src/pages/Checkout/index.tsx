import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Row, InputGroup, TabButton } from './styles'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <>
      <form onSubmit={form.handleSubmit} className="container">
        <Card title="Dados de Cobrança">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.fullName}
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.email}
                />
                <small>{getErrorMessage('email', form.errors.email)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  type="text"
                  name="cpf"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cpf}
                />
                <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
              </InputGroup>
            </Row>
            <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  id="deliveryEmail"
                  type="email"
                  name="deliveryEmail"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.deliveryEmail}
                />
                <small>
                  {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                <input
                  id="confirmDeliveryEmail"
                  type="email"
                  name="confirmDeliveryEmail"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.confirmDeliveryEmail}
                />
                <small>
                  {getErrorMessage(
                    'confirmDeliveryEmail',
                    form.errors.confirmDeliveryEmail
                  )}
                </small>
              </InputGroup>
            </Row>
          </>
        </Card>
        <Card title="Pagamento">
          <>
            <TabButton
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
            >
              <img src={boleto} alt="Boleto" />
              Boleto bancário
            </TabButton>
            <TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
            >
              <img src={cartao} alt="Cartão" />
              Cartão de crédito
            </TabButton>
            <div className="margin-top">
              {payWithCard ? (
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do titular do cartão
                      </label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.cardOwner}
                      />
                      <small>
                        {getErrorMessage('cardOwner', form.errors.cardOwner)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfCardOwner">
                        Cpf do titular do cartão
                      </label>
                      <input
                        id="cpfCardOwner"
                        type="text"
                        name="cpfCardOwner"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.cpfCardOwner}
                      />
                      <small>
                        {getErrorMessage(
                          'cpfCardOwner',
                          form.errors.cpfCardOwner
                        )}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup>
                      <label htmlFor="cardDisplayName">Nome no cartão</label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        name="cardDisplayName"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.cardDisplayName}
                      />
                      <small>
                        {getErrorMessage(
                          'cardDisplayName',
                          form.errors.cardDisplayName
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.cardNumber}
                      />
                      <small>
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <input
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.expiresMonth}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresMonth',
                          form.errors.expiresMonth
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.expiresYear}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresYear',
                          form.errors.expiresYear
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.cardCode}
                      />
                      <small>
                        {getErrorMessage('cardCode', form.errors.cardCode)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxWidth="150px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        id="installments"
                        name="installments"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.installments}
                      >
                        <small>
                          {getErrorMessage(
                            'installments',
                            form.errors.installments
                          )}
                        </small>
                        <option value="">1x de R$200,00</option>
                        <option value="">2x de R$200,00</option>
                        <option value="">3x de R$200,00</option>
                      </select>
                    </InputGroup>
                  </Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </div>
          </>
        </Card>
        <div style={{ marginBottom: '40px' }}>
          <Button type="button" title="Clique aqui para finalizar a compra">
            Finalizar compra
          </Button>
        </div>
      </form>
    </>
  )
}

export default Checkout
