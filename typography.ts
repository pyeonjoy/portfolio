// 웹용 Typography 설정
// 기본 폰트 패밀리 설정
export const FONT_FAMILY = {
  REGULAR: '"Gmarket Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  LIGHT: '"Gmarket Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  MEDIUM: '"Gmarket Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  BOLD: '"Gmarket Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  MONO: 'Menlo, Monaco, "Courier New", monospace',
} as const;

// 색상 상수
export const colors = {
  BLACK: '#1E1E22',
  GREY: '#727272',
  LIGHT_GREY: '#666666',
  WHITE: 'white',
  BACKGROUND_GREY: '#F2F4F6',
} as const;

// 폰트 크기 상수
export const sizes = {
  HEADING: 18,
  SUBTITLE: 16,
  BODY: 14,
  SMALL: 13,
} as const;

// 폰트 웨이트 상수
export const weights = {
  REGULAR: '400',
  MEDIUM: '500',
  SEMI_BOLD: '600',
  BOLD: '700',
} as const;

// 기본 텍스트 스타일 (웹용 CSS 속성)
const baseTextStyle = {
  letterSpacing: '-0.02em',
  fontFamily: FONT_FAMILY.REGULAR,
  color: colors.BLACK,
} as const;

// 자주 사용되는 텍스트 스타일 조합
export const textStyles = {
  // Heading 스타일
  heading32: {
    ...baseTextStyle,
    fontSize: 32,
    lineHeight: 44,
    fontWeight: '700',
  },
  heading24: {
    ...baseTextStyle,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
  },
  heading20: {
    ...baseTextStyle,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
  },
  heading18: {
    ...baseTextStyle,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
  },

  // SubTitle 스타일
  subtitle16: {
    ...baseTextStyle,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  subtitle14: {
    ...baseTextStyle,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },

  // Label 스타일
  label14: {
    ...baseTextStyle,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  label13: {
    ...baseTextStyle,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
  },

  // Body 스타일
  body18: {
    ...baseTextStyle,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
  },
  body16: {
    ...baseTextStyle,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  body14: {
    ...baseTextStyle,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
  body13: {
    ...baseTextStyle,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
  },

  // Caption 스타일
  caption12: {
    ...baseTextStyle,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },

  // Overline 스타일
  overline10: {
    ...baseTextStyle,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
  },
} as const;
