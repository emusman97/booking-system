interface BaseResponse<D> {
  success: boolean;
  message?: string;
  data?: D;
}

export interface SuccessResponse<D> extends BaseResponse<D> {
  success: true;
}

export interface FailureResonse extends BaseResponse<null> {
  success: false;
}
