import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

// ✅ Mock emailjs and toast
jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}));

jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

describe('ContactForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('shows validation errors if form is submitted empty', async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  test('shows email format error for invalid email', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'invalidemail' },
    });
    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(await screen.findByText('Email is invalid')).toBeInTheDocument();
  });

  test('sends message successfully', async () => {
    emailjs.send.mockResolvedValueOnce({ status: 200 });

    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Message'), {
      target: { value: 'Hello from test!' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith('Message sent successfully');
    });
  });

  test('handles error on failed submission', async () => {
    emailjs.send.mockRejectedValueOnce(new Error('Error sending email'));

    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: 'Jane' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Message'), {
      target: { value: 'Oops error' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'Failed to send message. Please try again later.'
      );
    });
  });
});
