using System.Drawing;
using System.Runtime.Versioning;

namespace Sugjo.Ocularus.Iconifier.Extractors;

[SupportedOSPlatform("windows")]
public sealed class PEIconExtractor : IIconExtractor
{
	public Task ExtractToAsync(string filePath, string? outputPath = null, CancellationToken cancellationToken = default)
	{
		outputPath ??= $"{Path.GetFileNameWithoutExtension(filePath)}.ico";

		var icon = Icon.ExtractIcon(filePath, id: 0) ?? throw new InvalidOperationException($"Could not extract icon from '{filePath}'.");

		using var iconStream = File.OpenWrite(outputPath);
		icon.Save(iconStream);

		return Task.CompletedTask;
	}
}
