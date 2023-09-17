import { Button } from "antd";
import { StepBackwardOutlined, HomeOutlined } from '@ant-design/icons'
import { Typography } from "antd";
const { Text, Paragraph, Title } = Typography;

function Button_1() {
    const copyable = {
        text: "Sao chép nội dung này",
        tooltips: [<span>Sao chép nếu Click</span>, <span>Đã sao chép</span>],
        format: 'text/html'
    }

    const editable = {
        autoSize: { minRows: 3, maxRows: 4 }
    }

    return (
        <>
            <Button loading={false} danger size={"large"} type={"default"} ghost shape={"round"} icon={<HomeOutlined />} ellipsis={true}>
                Search
            </Button>
            <br />
            <StepBackwardOutlined />
            <br />
            <Typography >
                Đây là Typography
                <Title level={1} editable={editable} copyable={copyable} code={true}>
                    Đây là Tiêu Đề
                </Title>
                <Paragraph>
                    Đây là Trần Quý Đạt <Text strong>Đây là Text</Text>
                </Paragraph>

            </Typography>


        </>
    );
}

export default Button_1;