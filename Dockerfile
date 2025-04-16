FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Zulatre/Zulatre.csproj", "Zulatre/"]
RUN dotnet restore "Zulatre/Zulatre.csproj"
COPY . .
WORKDIR "/src/Zulatre"
RUN dotnet build "Zulatre.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Zulatre.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Zulatre.dll"]
