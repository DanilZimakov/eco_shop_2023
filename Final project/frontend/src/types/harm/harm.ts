export type HarmType = {
  data: HarmType[] | RejectWithValue<unknown, unknown> | PromiseLike<HarmType[] | RejectWithValue<unknown, unknown>>;
  postId: number;
  message: string;
};
