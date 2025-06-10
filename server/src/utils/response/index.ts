import {
  GENERIC_ERROR_MESSAGE,
  GENERIC_SUCCESS_MESSAGE,
} from '../../constants';
import { FailureResonse, SuccessResponse } from './types';

export const createSuccessResponse = <D>(
  data?: D,
  message = GENERIC_SUCCESS_MESSAGE
): SuccessResponse<D> => ({ success: true, data, message });

export const createFailureResponse = (
  message = GENERIC_ERROR_MESSAGE
): FailureResonse => ({ success: false, message, data: null });
