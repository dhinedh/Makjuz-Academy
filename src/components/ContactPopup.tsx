import React, { useState } from "react";
import { Modal, Input, Form, Button, message } from "antd";
import api from "../api/axios"; // axios instance

interface ContactPopupProps {
  courseName: string;
  open: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ courseName, open, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      await api.post("/course-contacts", {
        ...values,
        courseName, // automatically include the courseName
      });
      message.success("Your details have been submitted!");
      onClose();
    } catch (error: any) {
      message.error(error?.response?.data?.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title={`Contact for ${courseName}`} open={open} onCancel={onClose} footer={null}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Enter your name" }]}>
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email", message: "Enter a valid email" }]}
        >
          <Input placeholder="your@email.com" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Enter your phone number" }]}
        >
          <Input placeholder="9876543210" />
        </Form.Item>
        <Form.Item name="comments" label="Comments">
          <Input.TextArea rows={3} placeholder="Any specific query..." />
        </Form.Item>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ContactPopup;
