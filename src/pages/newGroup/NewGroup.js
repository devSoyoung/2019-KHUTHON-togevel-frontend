import React from 'react';
import { connect } from 'react-redux';
import { TravelActionTypes, TravelActionCreators } from 'store/travel/travel.action';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Button,
  Upload,
  Input,
  message,
  Icon,
  DatePicker,
} from 'antd';

import './NewGroup.css';

const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const schools = ['경희대학교', '성균관대학교', '서울대학교', '고려대학교', '한양대학교', '중앙대학교', '경기대학교', '동국대학교', '세종대학교', '포항공과대학교', '명지대학교', '인천대학교', '인하대학교', '이화여자대학교', '서강대학교', '서울시립대학교', '단국대학교', '우송대학교'];

const rangeConfig = {
  rules: [{ type: 'array', required: true, message: '여행 일정을 반드시 입력해주세요!' }],
};

class NewGroupPage extends React.Component {
  state = {
    loading: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.coverImage = this.state.imageUrl;
        values.date = values.date[0].toISOString().split('T')[0] + " ~ " + values.date[1].toISOString().split('T')[0];
        values.organiser = this.props.user;
        values.currentPeopleNum = 0;
        values.status = 'in progress';
        this.props.addNewTravel([values]);
        this.props.history.push('/travelgroup')
      }
    });
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };



  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div className="new-group-page">
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="여행 이름" hasFeedback>
            {getFieldDecorator('title', {
              rules: [
                { required: true, message: '여행 이름을 반드시 입력해주세요.', type: 'string' },
              ],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label="모든학교 참여 가능">
            {getFieldDecorator('all', { valuePropName: 'checked' })(<Switch />)}
          </Form.Item>

          <Form.Item label="참여학교">
            {getFieldDecorator('schools', {
              rules: [
                { required: true, message: '여행에 참가할 수 있는 모든 학교를 선택 해 주세요.', type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="여행에 참가할 모든 학교를 선택해 주세요.">
                {schools.map(school => <Option value={school}>{school}</Option>)}
              </Select>,
            )}
          </Form.Item>

          <Form.Item label="여행 일정">
            {getFieldDecorator('date', rangeConfig)(<RangePicker />)}
          </Form.Item>

          <Form.Item label="전체 인원수">
            {getFieldDecorator('totalPeopleNum', { initialValue: 0 })(<InputNumber min={2} max={30} />)}
            <span className="ant-form-text"> 명</span>
          </Form.Item>

          <Form.Item label="대표이미지">
            {getFieldDecorator('coverImage', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>,
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 0 }}>
            <Button type="primary" htmlType="submit" style={{display: 'block', marginLeft: 'auto', marginTop: '20px'}}>
              등록하기
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNewGroupPage = Form.create({ name: 'validate_other' })(NewGroupPage);

const mapStateToProps = state => ({
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({
  addNewTravel: (item) => dispatch(TravelActionCreators.addNewTravel(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedNewGroupPage);
