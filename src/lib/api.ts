import {
	CardImageGet,
	ImagePost,
	CardData,
	CardItemPost,
	CardItemGet,
	ColumnData,
	ColumnGet,
	ColumnPost,
	ColumnPut,
	CommentData,
	CommentsGet,
	CommentPut,
	CommnetPost,
	DashboardData,
	DashboardsGet,
	DashboardPost,
	InvitationsDashboardGet,
	InvitationDashboardData,
	InvitationDashboardPost,
	UserInfoWithToken,
	InvitationsGet,
	InvitationPut,
	MembersGet,
	UserInfo,
	UsersProfileImagePost,
} from '@/constants/types';
import { authInstance as authAxios, instance as axios } from './axios';

//===============================
//============Auth===============
//===============================
/**
 * 로그인
 */
interface postAuthLoginProps {
	email: string;
	password: string;
}
export async function postAuthLogin({ email, password }: postAuthLoginProps) {
	const res = await axios.post<UserInfoWithToken>('/auth/login', {
		email,
		password,
	});
	return res.data;
}

/**
 * 비밀번호 변경
 */
interface putAuthPasswordProps {
	password: string;
	newPassword: string;
}
export async function putAuthPassword({ password, newPassword }: putAuthPasswordProps) {
	const res = await authAxios.put<number>('/auth/password', {
		password,
		newPassword,
	});
	return res.status; //204 성공
}

//===============================
//===========Cards===============
//===============================
/**
 * 카드 생성
 */
export async function postCards(cardItem: CardItemPost) {
	const res = await authAxios.post<CardData>('/cards', cardItem);
	return res.data;
}

interface getCardsProps {
	size?: number;
	cursorId?: number;
	columnId: number;
}
/**
 * 카드 목록 조회
 */
export async function getCards({ size, cursorId, columnId }: getCardsProps) {
	const cursorIdQuery = cursorId ? `&cursorId=${cursorId}` : '';
	const res = await authAxios.get<CardItemGet>(`/cards?size=${size}${cursorIdQuery}&columnId=${columnId}`);
	return res.data;
}

/**
 * 카드 수정
 */
export async function putCardItem(cardId: number, cardItem: CardItemPost) {
	const res = await authAxios.put<CardData>(`/cards/${cardId}`, cardItem);
	return res.data;
}

/**
 * 카드 상세조회
 */
export async function getCardItem(cardId: number) {
	const res = await authAxios.get<CardData>(`/cards/${cardId}`);
	return res.data;
}

/**
 * 카드 삭제
 */
export async function deleteCardItem(cardId: number) {
	const res = await authAxios.delete<number>(`/cards/${cardId}`);
	return res.status;
}

//===============================
//===========Columns===============
//===============================
/**
 * 컬럼 생성
 */
export async function postColumn(Column: ColumnPost) {
	const res = await authAxios.post<ColumnData>('/columns', Column);
	return res.data;
}

/**
 * 컬럼 목록 조회
 */
export async function getColumns(dashboardId: number) {
	const res = await authAxios.get<ColumnGet>(`/columns?dashboardId=${dashboardId}`);
	return res.data;
}

/**
 * 컬럼 수정
 */
export async function putColumn(columnId: number, Column: ColumnPut) {
	const res = await authAxios.put<ColumnData>(`/columns/${columnId}`, Column);
	return res.data;
}

/**
 * 컬럼 삭제
 */
export async function deleteColumn(columnId: number) {
	const res = await authAxios.delete<number>(`/columns/${columnId}`);
	return res.status;
}

/**
 * 카드 이미지 업로드
 */
export async function postCardImage(columnId: number, imageFile: ImagePost) {
	const res = await authAxios.post<CardImageGet>(`/columns/${columnId}/card-image`, imageFile);
	return res.data;
}

//===============================
//===========Comments===============
//===============================
/**
 * 댓글 생성
 */
export async function postComment(comment: CommnetPost) {
	const res = await authAxios.post<CommentData>('/comments', comment);
	return res.data;
}

interface getCommentsProps {
	size?: number;
	cursorId?: number;
	cardId: number;
}

/**
 * 댓글 목록 조회
 */
export async function getComments({ size, cursorId, cardId }: getCommentsProps) {
	const res = await authAxios.get<CommentsGet>(`/comments?size=${size}&cursorId=${cursorId}&cardId=${cardId}`);
	return res.data;
}

/**
 * 댓글 수정
 */
export async function putComment(commentId: number, comment: CommentPut) {
	const res = await authAxios.put<CommentData>(`/comments/${commentId}`, comment);
	return res.data;
}

/**
 * 댓글 삭제
 */
export async function deleteComment(commentId: number) {
	const res = await authAxios.delete<number>(`/comments/${commentId}`);
	return res.status;
}

//===============================
//===========Dashboards===============
//===============================
/**
 * 대시보드 생성
 */
export async function postDashboard(dashboard: DashboardPost) {
	const res = await authAxios.post<DashboardData>(`/dashboards`, dashboard);
	return res.data;
}

export interface getDashboardsProps {
	navigationMethod: 'infiniteScroll' | 'pagination';
	cursorId?: number;
	page?: number;
	size?: number;
}

/**
 * 대시보드 목록 조회
 */
export async function getDashboards({ navigationMethod, cursorId, page, size }: getDashboardsProps) {
	const res = await authAxios.get<DashboardsGet>(
		`/dashboards?navigationMethod=${navigationMethod}&cursorId=${cursorId}&page=${page}&size=${size}`,
	);
	return res.data;
}

/**
 * 대시보드 상세 조회
 */
export async function getDashboardItem(dashboardId: number) {
	const res = await authAxios.get<DashboardData>(`/dashboards/${dashboardId}`);
	return res.data;
}

/**
 * 대시보드 수정
 */
export async function putDashboard(dashboardId: number, dashboard: DashboardPost) {
	const res = await authAxios.put<DashboardData>(`/dashboards/${dashboardId}`, dashboard);
	return res.data;
}

/**
 * 대시보드 삭제
 */
export async function deleteDashboard(dashboardId: number) {
	const res = await authAxios.delete<number>(`/dashboards/${dashboardId}`);
	return res.status;
}

/**
 * 대시보드 초대하기
 */
export async function postInvitationDashboard(dashboardId: number, invitation: InvitationDashboardPost) {
	const res = await authAxios.post<InvitationDashboardData>(`/dashboards/${dashboardId}/invitations`, invitation);
	return res.data;
}

interface getInvitationsDashboardProps {
	dashboardId: number;
	page: number;
	size: number;
}

/**
 * 대시보드 초대 불러오기
 */
export async function getInvitationsDashboard({ dashboardId, page, size }: getInvitationsDashboardProps) {
	const res = await authAxios.get<InvitationsDashboardGet>(
		`/dashboards/${dashboardId}/invitations?page=${page}&size=${size}`,
	);
	return res.data;
}

/**
 * 대시보드 초대 취소
 */
export async function deleteInvitationDashboard(dashboardId: number, invitationId: number) {
	const res = await authAxios.delete<number>(`/dashboards/${dashboardId}/invitations/${invitationId}`);
	return res.status;
}

//===============================
//===========Invitations===============
//===============================
interface getInvitationsProps {
	size?: number;
	cursorId?: number;
	title?: string;
}
/**
 * 내가 받은 초대 목록 조회
 */
export async function getInvitations({ size, cursorId, title }: getInvitationsProps) {
	const res = await authAxios.get<InvitationsGet>(`/invitations?size=${size}&cursorId=${cursorId}&title=${title}`);
	return res.data;
}

/**
 * 초대 응답
 */
export async function putInvitations(invitationId: number, inviteAccepted: InvitationPut) {
	const res = await authAxios.put<InvitationsGet>(`/invitations/${invitationId}`, inviteAccepted);
	return res.data;
}

//===============================
//===========Members===============
//===============================
interface getMembersProps {
	page?: number;
	size?: number;
	dashboardId: number;
}
/**
 * 대시보드 멤버 목록 조회
 */
export async function getMembers({ page, size, dashboardId }: getMembersProps) {
	const res = await authAxios.get<MembersGet>(`/members?page=${page}&size=${size}&dashboardId=${dashboardId}`);
	return res.data;
}

/**
 * 대시보드 멤버 삭제
 */
export async function deleteMembers(memberId: number) {
	const res = await authAxios.delete<number>(`/members/${memberId}`);
	return res.status;
}

//===============================
//===========Users===============
//===============================
interface postUsersProps {
	email: string;
	nickname: string;
	password: string;
}
/**
 * 회원가입
 */
export async function postUsers(userInfo: postUsersProps) {
	const res = await axios.post<UserInfo>(`/users`, userInfo);
	return res.data;
}

/**
 * 내 정보 조회
 */
export async function getUsers() {
	const res = await authAxios.get<UserInfo>(`/users/me`);
	return res.data;
}

interface putUsersProps {
	nickname: string;
	profileImageUrl: string;
}
/**
 * 내 정보 수정
 */
export async function putUsers(userData: putUsersProps) {
	const res = await authAxios.put<UserInfo>(`/users/me`, userData);
	return res.data;
}

/**
 * 프로필 이미지 업로드
 */
export async function postUsersProfileImage(imageFile: ImagePost) {
	const res = await authAxios.post<UsersProfileImagePost>(`/users/me/image`, imageFile);
	return res.data;
}
