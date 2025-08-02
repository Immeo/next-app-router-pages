import { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface TextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: FieldError;
}
