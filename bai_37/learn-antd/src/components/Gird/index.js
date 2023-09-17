import { Row, Col } from 'antd'
import CardItem from '../CardItem/index'

const Gird = () => {
    return (
        <>
            <Row gutter={[20, 20]}>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <CardItem title="Box-1" />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <CardItem title="Box-2" />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <CardItem title="Box-3" />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <CardItem title="Box-4" />
                </Col>
            </Row>
        </>
    )
}

export default Gird;