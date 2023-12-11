import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const { Option } = Select;

type FieldType = {
  name?: string;
  image?: string;
  imdb?: Number;
  genre?: [];
  plot?: string;
  time?: string;
  year?: string;
};

const MovieForm = () => {
  return (

    <div className='flex flex-col gap-5'>
      <div className='flex flex-col mt-4 gap-2'>

        <div className='items-center'>
          <Form.Item<FieldType>
            name="name"
            className='items-center'
            rules={[{ required: true, message: "Name required" }]}
          >
            <Input size="large" placeholder="Name" />
          </Form.Item>
        </div>

        <div>
          <Form.Item<FieldType>
            name="image"
            rules={[{ required: true, message: "Image required" }]}
          >
            <Input size="large" placeholder="Image" />
          </Form.Item>
        </div>

        <div>
          <Form.Item<FieldType>
            name="genre"
            rules={[{ required: true, message: 'Genre Required' }]}
          >
            <Select mode="multiple" placeholder="Genres">
              <Option value="Action">Action</Option>
              <Option value="Adventure">Adventure</Option>
              <Option value="Animation">Animation</Option>
              <Option value="Children">Children</Option>
              <Option value="Comedy">Comedy</Option>
              <Option value="Crime">Crime</Option>
              <Option value="Documentary">Documentary</Option>
              <Option value="Drama">Drama</Option>
              <Option value="Family">Family</Option>
              <Option value="Horror">Horror</Option>
              <Option value="Musical">Musical</Option>
              <Option value="Fantasy">Fantasy</Option>
              <Option value="Thriller">Thriller</Option>
              <Option value="Romance">Romance</Option>
              <Option value="Sports">Sports</Option>
              <Option value="Western">Western</Option>
              <Option value="War">War</Option>
            </Select>
          </Form.Item>
        </div>


        <div>
          <Form.Item<FieldType>
            name="year"
            rules={[{ required: true, message: "Year required" }]}
          >
            <DatePicker picker="year" />
          </Form.Item>
        </div>

        <div>
          <Form.Item<FieldType>
            name="time"
            rules={[{ required: true, message: "Time required" }]}
          >
            <InputNumber placeholder='Time' />
          </Form.Item>
        </div>

        <div>
          <Form.Item
            name="imdb"
            rules={[
              { required: true, message: "IMDB required" },
              { type: 'number', min: 0, max: 10, message: 'IMDB must be between 0 and 10' },
            ]}
          >
            <InputNumber

              placeholder="IMDB"
            />
          </Form.Item>
        </div>


        <div>
          <Form.Item<FieldType>
            name="plot"
            rules={[{ required: true, message: "Plot required" }]}
          >
            <TextArea
              placeholder="Plot"
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Form.Item>
        </div>


      </div>

      <div className='flex justify-end'>
        <Form.Item className='mb-0'>
          <Button htmlType="submit" style={{ borderRadius: '0px' }} type="primary" size='large'>
            Create
          </Button>
        </Form.Item>
      </div>
    </div>
  )
}

export default MovieForm