import { Card } from 'react-bootstrap'

const MostraAnalisi = props => {
  return (
    <Card className="p-2 text-center">
      <Card.Text>
        {props.title}
        <i class="bi bi-arrow-right"></i>
      </Card.Text>
    </Card>
  )
}

export default MostraAnalisi
