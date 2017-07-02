// *.vue 파일을 ts에서 쓰기 위한 설정 
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}