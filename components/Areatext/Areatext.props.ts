import { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface AreatextProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: FieldError;
}
