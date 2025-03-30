var builder = WebApplication.CreateBuilder(args);

// 👇 ESTA LÍNEA ES CLAVE
builder.WebHost.UseUrls("http://0.0.0.0:5089");

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowAll");

app.MapControllers();

app.Run();
