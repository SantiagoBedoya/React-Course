import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {
  return (
    <>
      <h1><i>{saludo}</i></h1>
      <h3>{subtitulo}</h3>
    </>
  )
}
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
  subtitulo: 'Hola Perras'
}

export default PrimeraApp;