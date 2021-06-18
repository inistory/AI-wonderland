from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny

from .models import User
from .serializers import UserSerializer, UserCreateSerializer, UserLoginSerializer


@api_view(['GET'])
def mypageInfo(request, id):
    if request.method == 'GET':
        memberInfo = User.objects.filter(pk = id)
        serializer = UserSerializer(memberInfo, many=True)
        return Response (
                    {
                        "status_code": status.HTTP_200_OK,
                        "status": "success",
                        "data": serializer.data
                    }, status = status.HTTP_200_OK
                )


@api_view(['POST'])
@permission_classes([AllowAny])
def signUp(request):
    if request.method == 'POST':
        serializer = UserCreateSerializer(data = request.data)

        if not serializer.is_valid(raise_exception = True):
            return Response (
                    {
                        "status_code": status.HTTP_409_CONFLICT,
                        "status": "error",
                        "message": "데이터가 유효하지 않습니다."
                    }, status = status.HTTP_409_CONFLICT
                )

        if User.objects.filter(email = serializer.validated_data['email']).first() is None:
            serializer.save()
            return Response (
                    {
                        "status_code": status.HTTP_201_CREATED,
                        "status": "success",
                        "message": "회원가입이 완료되었습니다."
                    }, status = status.HTTP_201_CREATED
                )
        return Response (
                {
                    "status_code": status.HTTP_409_CONFLICT,
                    "status": "error",
                    "message": "email이 중복되었습니다."
                }, status = status.HTTP_409_CONFLICT
            )


@api_view(['POST'])
@permission_classes([AllowAny])
def signIn(request):
    if request.method == 'POST':
        serializer = UserLoginSerializer(data = request.data)

        if not serializer.is_valid(raise_exception = True):
            return Response (
                    {
                        "status_code": status.HTTP_409_CONFLICT,
                        "status": "error",
                        "message": "데이터가 유효하지 않습니다."
                    }, status = status.HTTP_409_CONFLICT
                )
        if serializer.validated_data['email'] == "None":
            return Response (
                    {
                        "status_code": status.HTTP_200_OK,
                        "status": "success",
                        "message": "로그인 정보가 일치하지 않습니다."
                    }, status = status.HTTP_200_OK
                )
        return Response (
                {
                    "status_code": status.HTTP_200_OK,
                    "status": "success",
                    "message": "로그인에 성공하였습니다.",
                    "token": serializer.data['token']
                }, status = status.HTTP_200_OK
            )