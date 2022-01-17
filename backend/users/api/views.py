from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from users.models import User
from users.api.serializers import UserRegisterSerializer, UserSerializer, UserUpdateSerilizer
from rest_framework.permissions import IsAuthenticated

class RegisterView(APIView):
    def post(self, request):
        serialize = UserRegisterSerializer(data=request.data)
        if serialize.is_valid(raise_exception=True):
            serialize.save()
            return Response(serialize.data)

        return Response(serialize.errors, status=status.HTTP_400_BAD_REQUEST)

class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serialize = UserSerializer(request.user)
        return Response(serialize.data)

    def put(self, request):
        user = User.objects.get(id=request.user.id)
        serialize = UserUpdateSerilizer(user, request.data)
        if serialize.is_valid(raise_exception=True):
            serialize.save()
            return Response(serialize.data)

        return Response(serialize.errors, status=status.HTTP_400_BAD_REQUEST)