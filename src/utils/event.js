import API from '../api';

// eslint-disable-next-line consistent-return
export async function fetchAPI(setTransformLink, linkItem) {
  try {
    const fetchItem = await API.getShorten(linkItem);
    setTransformLink(fetchItem);
  } catch (error) {
    console.error(error);
  }
}

export const Messages = {
  success: '정상적으로 등록되었습니다 😆',
  copyedSuccess: '정상적으로 복사했습니다 😆',
  deletedSuccess: '정상적으로 삭제했습니다 😆',
  failed: '등록을 실패했습니다 😢',
  overlapFailed: '이미 등록된 URL입니다 😫',
}

export const Alert = (state) => {
  alert(state);
}