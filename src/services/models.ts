export interface Event {
    id?: string;
    name?: string;
    blocked?: boolean;
    full_name?: string;
    misp_app_id?: number;
    permissions?: object;
    role_type?: string;
    rule?: string;
  }

  export interface Action<T> {
    type: any;
    payload: T;
  }